import { error, redirect, type Actions } from '@sveltejs/kit';
import gdoc from "$lib/helpers/gdocApi";

export const actions = {
    default: async ({ request }) => {
        const form_data = await request.formData();

        const data = new URLSearchParams();
        for (const [name, value] of form_data.entries()) {
            if (typeof value === 'string') {
                data.append(name, value);
            } else {
                error(400, `Received form value of unexpected type (${value}: ${typeof value}).`);
            }
        }

        const recaptcha_response = form_data.get('recaptcha-response')?.valueOf();
        if (typeof recaptcha_response !== 'string') {
            error(400, 'Invalid reCaptcha response.');
        }

        const recaptcha_success = await verify_recaptcha(recaptcha_response);

        if (recaptcha_success !== true) {
            error(400, 'Unsuccessful reCaptcha response.');
        }

        //  ---------

        const response = await fetch(gdoc.GAPP_URL, {
            method: 'POST',
            body: data,
        });

        const response_body = await response.json();

        if (response_body.success !== true) {
            error(400, 'Unsuccessful response from gApi server.');
        }
    },
} satisfies Actions;



async function verify_recaptcha(recaptcha_response: string) {
    const url = 'https://www.google.com/recaptcha/api/siteverify';
    const secret = import.meta.env.VITE_RECAPTCHA_SECRET_KEY;

    const data = new URLSearchParams();
    data.append('secret', secret);
    data.append('response', recaptcha_response);

    const r = await fetch(url, {
        body: data,
        method: 'POST'
    });
    const response = await r.json();

    return response.success;
}