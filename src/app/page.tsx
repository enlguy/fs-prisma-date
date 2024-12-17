import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>hello</h1>
      <Button color="primary" variant="shadow" as={Link} href="/members">
        Click
      </Button>
    </div>
  );
}
