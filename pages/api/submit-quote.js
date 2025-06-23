export default async function handler(req, res) {
    // Set response headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');

    // Method validation
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ 
            success: false,
            error: 'Method not allowed'
        });
    }

    // Input validation
    const requiredFields = ['name', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({
            success: false,
            error: `Missing required fields: ${missingFields.join(', ')}`,
            missingFields
        });
    }

    try {
        // Google Apps Script configuration
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzfAtfDcRT2Tx96E8iCCtzclhwy92iQEaKudDTT4ZC1zYgvv4sF9aF03vUKfS1kGBdd/exec';
        
        // Forward to Google Script
        const scriptResponse = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...req.body,
                receivedAt: new Date().toISOString()
            }),
            redirect: 'follow'
        });

        // Handle Google Script errors
        if (!scriptResponse.ok) {
            throw new Error(`Google Script error: ${scriptResponse.statusText}`);
        }

        const responseText = await scriptResponse.text();

        // Parse response
        try {
            const data = JSON.parse(responseText);
            return res.status(200).json({
                success: data.result === 'success',
                ...data
            });
        } catch {
            return res.status(200).json({ 
                success: true,
                message: 'Form submitted successfully'
            });
        }

    } catch (error) {
        console.error('API Error:', error);
        
        return res.status(500).json({
            success: false,
            error: 'Internal server error',
            ...(process.env.NODE_ENV === 'development' && {
                debug: error.message,
                stack: error.stack
            })
        });
    }
}