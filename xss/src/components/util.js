const removeXssAttacks = html => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  // removing the script tags
  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, '');
  }

  // remove the events
  html = html.replace(/ on\w+="[^"]*"/g, '');
  return {
    __html: html
  };
};

export default removeXssAttacks;
