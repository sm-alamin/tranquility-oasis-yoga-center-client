import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import { toast } from 'react-hot-toast';

const img_hosting_token = import.meta.env.VITE_IMAGE_STORAGE_KEY;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { user } = useAuth();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { class_name, available_seats, price } = data;
          const newClass = {
            image: imgURL,
            instructor_name: user?.name,
            instructor_email: user?.email,
            class_name,
            available_seats: parseInt(available_seats),
            price: parseFloat(price),
          };
          console.log(newClass);
          axiosSecure.post('/courses', newClass).then((data) => {
            console.log('after posting new class', data.data);
            if (data.data.insertedId) {
              reset();
              toast.success('Class is added successfully')
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <SectionHeader heading="Add New Class" tagline="Be proud to be an Instructor" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="file"
            {...register('image', { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Name"
            {...register('instructor_name')}
            defaultValue={user?.displayName || ''}
            className="input input-bordered w-full"
            disabled
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Email"
            {...register('instructor_email')}
            defaultValue={user?.email || ''}
            className="input input-bordered w-full"
            disabled
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register('class_name', { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>Yoga Flow</option>
              <option>Power Yoga</option>
              <option>Iyengar Yoga</option>
              <option>Vinyasa Flow</option>
              <option>Hatha Yoga</option>
              <option>Bikram Yoga</option>
              <option>Restorative Yoga</option>
              <option>Yin Yoga</option>
              <option>Ashtanga Yoga</option>
              <option>Kundalini Yoga</option>
            </select>
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Available seats</span>
            </label>
            <input
              type="number"
              {...register('available_seats', { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              {...register('price', { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddClass;
