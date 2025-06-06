export default function Footer() {
  return (
    <footer>
      <small>
        &copy;
        {new Date().getFullYear()}. TripPrep. All rights reserved.
      </small>
      <p>
        Version <b>1.5</b>
      </p>
    </footer>
  );
}
