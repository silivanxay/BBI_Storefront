import Link from "next/link";
import React from "react";
import AdminLayout from "../../../../components/layouts/admin";

const DashbaordAdmin = () => {
  return (
    <>
      <Link href="/dashboard/user/">
        <a>Product</a>
      </Link>
    </>
  );
};

export default DashbaordAdmin;

DashbaordAdmin.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
