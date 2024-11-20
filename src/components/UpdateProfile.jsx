import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, manageUpdateProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    manageUpdateProfile(name, photoURL)
      .then(() => {
        Swal.fire({
          position: "bottom-center",
          icon: "success",
          title: `Congrats..! ${user.displayName}, Your Profile has been Updated`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/userProfile"); 
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("Failed to update profile. Please try again.");
      });
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleUpdate}
        className="card w-full max-w-md bg-base-100 shadow-xl p-5"
      >
        <h2 className="text-2xl font-bold text-center mb-5">Update Profile</h2>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter new name"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Enter new photo URL"
            className="input input-bordered"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;


