import { redirect } from '@sveltejs/kit';

const map: Record<string, string> = {
    facebooku: "https://www.facebook.com/AdorareVK/",
    facebook: "https://www.facebook.com/AdorareVK/",
    fb: "https://www.facebook.com/AdorareVK/",
    instagramu: "https://www.instagram.com/skupina_adorare/",
    instagram: "https://www.instagram.com/skupina_adorare/",
    ig: "https://www.instagram.com/skupina_adorare/",
    spotify: "https://open.spotify.com/artist/3vnsh4Z8eBN0AD6iTiITn3",
    youtube: "https://www.youtube.com/channel/UCN150yOV_e0l9pev3soXP_g",
    ytb: "https://www.youtube.com/channel/UCN150yOV_e0l9pev3soXP_g",
};

export async function load({ params }) {
    const socialId = params.social;
    const redirectUri = map[socialId] ?? "/";

    redirect(302, redirectUri);
}