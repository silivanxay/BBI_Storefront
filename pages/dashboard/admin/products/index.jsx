import React from "react";
import Link from "next/link";
import AdminLayout from "../../../../components/layouts/admin";

const DashbaordAdmin = () => {
  return (
    <AdminLayout>
      <Link href="dashboard/admin/prodects/add">New product</Link>
    </AdminLayout>
  );
};

export default DashbaordAdmin;
