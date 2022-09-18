import Link from "next/link";
import React from "react";
import AdminLayout from "../../../../components/layouts/admin";

const DashbaordAdmin = () => {
  return (
    <AdminLayout>
      <Link href="/dashboard/user/">
        <a>Product</a>
      </Link>
    </AdminLayout>
  );
};

export default DashbaordAdmin;
