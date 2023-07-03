interface ContainerProps {
  children: React.ReactNode;
}

type Props = {};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
