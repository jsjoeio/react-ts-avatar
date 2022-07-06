import { render, screen, waitFor } from "@testing-library/react";
import {
  Avatar,
  FALLBACK_AVATAR_URL,
  FALLBACK_AVATAR_ALT_TEXT,
} from "../Avatar";

describe("<Avatar />", () => {
  it("should render the URL passed in", () => {
    const url =
      "https://4.bp.blogspot.com/-Nu7jeZ8IhJw/T6TJRX5koEI/AAAAAAAAEf8/8DgFdwhM-pk/s1600/Cute-Puppy-puppies-wallpapers-08.jpg";
    render(<Avatar url={url} />);

    const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT);
    expect(img).toHaveAttribute("src", url);
  });
  it("should use a fallback image if no URL passed in", () => {
    render(<Avatar />);

    const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT);
    expect(img).toHaveAttribute("src", FALLBACK_AVATAR_URL);
  });
  it("should use a fallback image if URL is a 404", async () => {
    const badUrl = "https://example.com/nonexistent.png";
    render(<Avatar url={badUrl} />);

    await waitFor(() => {
      // getByAltText is somewhat synchronous and query* await by default
      const img = screen.queryByAltText(FALLBACK_AVATAR_ALT_TEXT);
      expect(img).toHaveAttribute("src", FALLBACK_AVATAR_URL);
    });
  });
});

// requirements:
// - it should take a URL for the avatar photo
//   - it should be optional
//   - if not provided, use default avatar photo
// - combine JSDoc + TS to provide good documentation
