import dynamic from "next/dynamic";

const View = dynamic(() => import("@/components/pages/users/member_lookup"), {
  ssr: false,
});

const Page = () => {
  return <View />;
};

export default Page;
