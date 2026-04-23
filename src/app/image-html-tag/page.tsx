export default function Page() {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/patrick.1200x1200.png" alt="Patrick" />
      <h1>Image from public folder using img tag</h1>
      <p>
        If you see the image above from Patrick, the test passed. Original image
        dimension: 1200 x 1200. Check the dimension of the displayed image is
        also 1200 x 1200.
      </p>
    </div>
  );
}
