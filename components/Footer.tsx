export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center mx-auto">
      <p className="font-sans mb-8 text-black dark:text-white">
        {`© ${currentYear} Song Lee Yee. All rights reserved.`}
      </p>
    </div>
  );
}
