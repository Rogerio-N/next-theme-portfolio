export interface EmailPayload {
    from: string,
    content: string
}

export interface SendEmailResponse {
    success: boolean,
    errorMessage?: string
}

export async function sendEmail(payload: EmailPayload): Promise<SendEmailResponse> {
    
    const sendResult = await fetch('/api/send', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            { 
                from: payload.from, 
                content: payload.content 
            }
        ),
    })

    return generateResponse(sendResult.status)
    
}

function generateResponse(statusCode: number) {
    const response: SendEmailResponse = {
        success: false,
        errorMessage: 'Um erro inesperado aconteceu, tente novamente mais tarde'
    }
    switch(statusCode) {
        case 200: 
            response.success = true
            response.errorMessage = undefined
        break
        case 429:
            response.success = false
            response.errorMessage = 'Você realizou muitas tentativas em um curto período de tempo. Por favor, aguarde alguns minutos antes de tentar novamente.'
        break
        default:
            response.success = false
            response.errorMessage = 'Um erro inesperado aconteceu, tente novamente mais tarde'
        break
    }
    return response
}