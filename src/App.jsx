import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthPage from "./pages/auth/authPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AdminLayout from "./components/layouts/adminLayout";
import AdminPrivateRoutes from "./components/privateRoutes/adminPrivateRoute";
import BookPage from "./pages/book/bookPage";
import HomePage from "./pages/client/homepage";
import BookDetailPage from "./pages/client/bookDetailPage";
import ClientPrivateRouter from "./components/privateRoutes/clientPrivateRoute";
import BurrowsPage from "./pages/client/burrowsPage";
import ReviewsPage from "./pages/admin/reviewsPage";
import UsersPage from "./pages/admin/usersPage";
import { getBooksAction } from "./pages/book/bookActions";
import DashboardPage from "./pages/admin/dashboardPage";
import ProfilePage from "./pages/user/profilePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);
  return (
    <>
      <Routes>
        {/* Auth Routes - Public Routes  */}

        <Route path="/auth" element={<AuthPage />} />
        <Route path="/homepage" element={<HomePage />} />

        {/* Admin Route */}
        <Route
          path="/admin"
          element={
            <AdminPrivateRoutes>
              <AdminLayout />
            </AdminPrivateRoutes>
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="books" element={<BookPage />} />
          <Route path="burrows" element={<BurrowsPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>

        {/* client routes-public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:_id" element={<BookDetailPage />} />
        {/* Client Routes - Private */}

        <Route path="/profile" element={<ProfilePage />} />

        <Route
          path="/burrows"
          element={
            <ClientPrivateRouter>
              <BurrowsPage />
            </ClientPrivateRouter>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
