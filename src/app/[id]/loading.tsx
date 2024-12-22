import Container from "@/components/layouts/Container";
import Loader from "@/components/shared/Loader";
import React from "react";

const Loading = () => {
  return (
    <Container className="flex items-center justify-center h-[100vh] bg-background">
      <Loader loadingText="Loading..." />
    </Container>
  );
};

export default Loading;
