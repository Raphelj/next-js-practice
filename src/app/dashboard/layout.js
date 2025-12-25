export default function DashboardLayout({ children,users,revenue,notifications,login }) {
  const islogged=true;
  
  return islogged?(
    <div>
      {children}
      <div>{users}</div>
      <div>{revenue}</div>
      <div>{notifications}</div>
    </div>
  ):(
    login
  );
}