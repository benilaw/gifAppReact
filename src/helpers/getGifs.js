
 
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=1IgzCWQ5R4WaP9XJrgl8oMWdOeBQVaX2&q=${category}&limit=5`;
  // api.giphy.com/v1/gifs/search?api_key=1IgzCWQ5R4WaP9XJrgl8oMWdOeBQVaX2&q=marvelrivals
  const resp = await fetch(url);
  const { data } = await resp.json();
  // console.log(data);
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  // console.log(gifs);
  return gifs;
};
