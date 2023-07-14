"use client";

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { User } from "@prisma/client";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { HiOutlineUserCircle } from "react-icons/hi2";

import { CldUploadButton } from "next-cloudinary";
import Modal from "~/app/component/Modal";
import Input from "./Input";
import Button from "./Button";

type TypeSettingsModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: User;
};

const SettingsModal = ({
  isOpen,
  onClose,
  currentUser,
}: TypeSettingsModalProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image,
    },
  });

  const image = watch("image");

  const handleUpload = (result: any) => {
    setValue("image", result.info.secure_url, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);

    axios
      .post("/api/settings", data)
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-neutral-100">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-neutral-300">
              Edit your public information.
            </p>

            <div className="mt-10 flex flex-col gap-y-8">
              <Input
                disabled={isLoading}
                label="Name"
                id="name"
                errors={errors}
                required
                register={register}
              />
              <div>
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-neutral-100">
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  {image || currentUser?.image ? (
                    <Image
                      width="48"
                      height="48"
                      className="h-9 w-9"
                      src={image || currentUser?.image}
                      alt="Avatar"
                    />
                  ) : (
                    <HiOutlineUserCircle className="h-9 w-9 text-neutral-100" />
                  )}

                  <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="pgc9ehd5">
                    <Button disable={isLoading} type="button">
                      Change
                    </Button>
                  </CldUploadButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button disable={isLoading} secondary onClick={onClose}>
            Cancel
          </Button>
          <Button disable={isLoading} type="submit">
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SettingsModal;
