"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h1>Image Optimization</h1>
      <Image
        src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?w=200"
        width={100}
        height={100}
        alt="Remote image"
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
      />
      {loading && <p>Loading...</p>}
      {!loading && !error && (
        <p>
          ✅ Test passed.
          <br />
          You should see the image in a 100x100 size. The original image
          dimension are 2268 x 4032.
        </p>
      )}
      {!loading && error && (
        <p>
          ❌ Test failed.
          <br />
          There was an error loading the image.
        </p>
      )}
    </div>
  );
}
