import React from "react"
import Results from "../Search/Stages/Results/Results"

export default function Demo() {
  const mockProps = {
    loading: false,
    hashtags: [{ photography: 0.85 }, { nature: 0.76 }, { landscape: 0.92 }],
    profileImageSrc: "https://picsum.photos/150",
    handle: "demouser",
    file: {
      src: "https://picsum.photos/800/600",
    },
    engagement: 245,
    setHashtags: (newHashtags) => console.log("Updated hashtags:", newHashtags),
  }

  return <Results {...mockProps} />
}
