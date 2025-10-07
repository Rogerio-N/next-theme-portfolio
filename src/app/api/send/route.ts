import { Resend } from 'resend'

const resend = new Resend(process.env.API_KEY)
const from = process.env.EMAIL_FROM
const to = process.env.EMAIL_TO

interface SendRequest {
    from: string
    content: string
}

const defaultError = {
    message: 'An unexpected error has occured. Try again later',
    timestap: new Date().toISOString(),
}

export async function POST(req: Request) {
    console.log('Starting to send email ...')
    const request = (await req.json()) as SendRequest
    try {
        if (
            !request.from ||
            request.from === null ||
            request.from === undefined ||
            request.from.length === 0
        )
            throw new Error('The parameter from is required')

        if (
            !request.content ||
            request.content === null ||
            request.content === undefined ||
            request.content.length === 0
        )
            throw new Error('The parameter content is required')

        const messageUUID = crypto.randomUUID()

        const { data, error } = await resend.emails.send(
            {
                from: from!,
                to: to!,
                subject: 'Contact from portfolio',
                text: `Email do visitante: ${request.from}\n\nMensagem:\n${request.content}`,
                headers: {
                    'X-Entity-Ref-ID': messageUUID,
                },
            },
            {
                idempotencyKey: messageUUID,
            }
        )

        if (error) {
            throw new Error(
                `An error has occurred while sending email. Error: ${error}`
            )
        }

        console.log(`Email sent with id ${data.id}`)
        return Response.json({ success: true })
    } catch (error) {
        console.error(
            `An error has occurred while sending email. Error: ${error}`
        )
        return Response.json(defaultError, { status: 500 })
    }
}
