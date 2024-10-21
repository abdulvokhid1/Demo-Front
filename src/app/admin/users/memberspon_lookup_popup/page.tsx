import dynamic from "next/dynamic";

const View = dynamic(
  () => import("@/components/pages/users/memberspon_lookup"),
  { ssr: false }
);

const Page = () => {
  return <View />;
};

export default Page;
