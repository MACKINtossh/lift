type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          <span>{new Date().getFullYear()} &copy; All Right Reserved</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
