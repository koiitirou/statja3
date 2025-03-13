import pre_path0 from "components/data/path_ndb/sum_prescription_path.json";

const pre_path = pre_path0.path;
export const getStaticPaths = async () => {
  return {
    paths: pre_path,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id2 } = context.params;
  //   const res1 = await fetch(`${server}/prescription/${id2}.json`);
  //   const res2 = await res1.json();

  return {
    props: {
      id2,
      // res2
    },
  };
};

const Home = (props) => {
  return <>{props.id2}a</>;
};

export default Home;
