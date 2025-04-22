(function () {
  const currentUrl = document.location.href;
  const uselessParams = ['journeybuilder','utm_source'];
  const url = new URL(currentUrl);
  const params = new URLSearchParams(url.search);
  const desktopDomain = url.host.replace(/^m\./, 'www.');
  const filteredParams = new URLSearchParams([...url.searchParams.entries()].filter(([key, value]) => !uselessParams.includes(key)));
  
  url.host = desktopDomain;
  url.search = filteredParams.toString();
  document.location.href=`https://archive.is/${url.toString()}`;
});
