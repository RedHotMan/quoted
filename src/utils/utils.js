export const isTweetUrl = (url) => {
  let validUrl = true;
  const expression = new RegExp(/^(?:http(s)?:\/\/)?twitter.com\/[\w.-]*\/status\/[0-9]*/gm);

  try {
    Boolean(new URL(url))
  } catch (e) {
    validUrl = false;
  }

  return expression.test(url) || validUrl;
}
