import { useState } from "react";
import { postRadiologyPatient } from "../api";
import { toast } from "react-toastify";
import { useAuth } from "../../middleware/Contexts";
import axios from "axios";

const RadiologyForm = ({
  onGetPatient,
  setIsOpen,
}: {
  onGetPatient: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { authUser } = useAuth();
  let loggedInUserId: string;
  {
    authUser !== null && (loggedInUserId = JSON.parse(authUser).id);
  }
  const [formData, setFormData] = useState({
    patientId: "",
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    desc: "",
    comment: "",
  });

  const handleChangeTextarea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      try {
        const imageUrl = await uploadImage(selectedImage);
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: imageUrl,
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const uploadImage = async (imageFile: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "zxyz9eff");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/karera/image/upload",
        formData
      );
      return response.data.url;
    } catch (error) {
      throw new Error("Failed to upload image");
    }
  };

  const submitForm = () => {
    const updatedFormData = { ...formData, userId: loggedInUserId };
    postRadiologyPatient(updatedFormData)
      .then((res) => {
        if (!res) throw new Error("You can not add patient");
        toast("Patient added successfully", {
          type: "success",
        });
        onGetPatient();
        setIsOpen((prev) => !prev);
        return res;
      })
      .catch((error) => {
        const reserror = error.response.data.message;
        toast(typeof reserror !== "string" ? reserror.join(",") : reserror, {
          type: "error",
        });
      })
      .finally(() => {
        setFormData({
          patientId: "",
          image: "",
          firstName: "",
          lastName: "",
          email: "",
          age: "",
          desc: "",
          comment: "",
        });
      });
  };
  const style = {
    input:
      "my-1 w-full rounded-sm border border-gray-200 px-2 py-3 outline-gray-400 placeholder:text-slate-600",

    button:
      "my-2 w-full rounded-sm bg-black/90 py-3 font-semibold text-gray-100 hover:shadow-lg",
  };
  return (
    <>
      <form className="block gap-4">
        <div className="block">
          <label htmlFor="myfile">Select an image file:</label>
          <input
            type="file"
            multiple
            onChange={handleChangeFile}
            title="Choose a video please"
            name="image"
            className={style.input}
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.patientId}
            onChange={handleChange}
            placeholder="patient Id"
            name="patientId"
            className={style.input}
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            name="firstName"
            className={style.input}
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            name="lastName"
            className={style.input}
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            className={style.input}
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            name="age"
            className={style.input}
          />
        </div>
        <div>
          <textarea
            value={formData.desc}
            onChange={handleChangeTextarea}
            placeholder="Description"
            name="desc"
            className={style.input}
          />
        </div>

        <button type="button" onClick={submitForm} className={style.button}>
          Add patient
        </button>
      </form>
    </>
  );
};

export default RadiologyForm;
