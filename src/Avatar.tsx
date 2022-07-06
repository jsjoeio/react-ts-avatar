// Note to self:
// Using Type instead of Interfacae
// because this is not a public API.
// See more: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/#tldr

import { useEffect, useState } from "react";

type AvatarProps = {
  /** The url to the image used inside the <img /> tag. */
  url?: string;
};

export const FALLBACK_AVATAR_URL =
  "https://4.bp.blogspot.com/-Nu7jeZ8IhJw/T6TJRX5koEI/AAAAAAAAEf8/8DgFdwhM-pk/s1600/Cute-Puppy-puppies-wallpapers-08.jpg";

export const FALLBACK_AVATAR_ALT_TEXT = "default user avatar";

export function Avatar(props: AvatarProps) {
  const fallBackImg =
    "https://4.bp.blogspot.com/-Nu7jeZ8IhJw/T6TJRX5koEI/AAAAAAAAEf8/8DgFdwhM-pk/s1600/Cute-Puppy-puppies-wallpapers-08.jpg";
  const { url = fallBackImg } = props;
  const [statusCodeOfFetchImg, setStatusCodeOfFetchImg] = useState(200);

  useEffect(() => {
    console.log("inside effect");
    async function getImgStatusCode(url: string): Promise<void> {
      let statusCode = 200;
      try {
        statusCode = await fetch(url).then((response) => response.status);
        console.log(`yooo status code is this: ${statusCode}`);
      } catch (error) {
        cohttps://www.hdnicewallpapers.com/Walls/Big/Cat/Beautiful_Cat_Image_Download.jpgnsole.error("you got an error, ha ", error);
        statusCode = 500;
      }
      setStatusCodeOfFetchImg(statusCode);
    }
    getImgStatusCode(url);
  }, [url]);

  return (
    <div>
      <img
        src={statusCodeOfFetchImg < 400 ? url : FALLBACK_AVATAR_URL}
        alt={FALLBACK_AVATAR_ALT_TEXT}
      />
    </div>
  );
}
