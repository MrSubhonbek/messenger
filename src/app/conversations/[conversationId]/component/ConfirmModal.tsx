"use client";

import { Dialog } from "@headlessui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { FiAlertTriangle } from "react-icons/fi";

import Modal from "~/app/component/Modal";
import Button from "~/components/Button";
import useConversation from "~/hooks/useConversation";

type TypeConfirmModalProps = {
  isOpen?: boolean;
  onClose: () => void;
};

const ConfirmModal = ({ onClose, isOpen }: TypeConfirmModalProps) => {
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = useCallback(() => {
    setIsLoading(true);
    axios
      .delete(`/api/conversations/${conversationId}`)
      .then(() => {
        onClose();
        router.push("/users");
        router.refresh();
      })
      .catch(() => toast("Something went wrong!"))
      .finally(() => setIsLoading(false));
  }, [conversationId, router, onClose]);

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center border border-rose-500 sm:mx-0 sm:h-10 sm:w-10">
          <FiAlertTriangle className="h-6 w-6 text-rose-500" />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className={"text-base font-semibold leading-6 text-neutral-100"}>
            Delete conversation
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-neutral-300">
              Are you sure you want to delete this conversation? This action
              cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-row-reverse gap-4 sm:mt-4">
        <Button disable={isLoading} danger onClick={onDelete}>
          Delete
        </Button>
        <Button disable={isLoading} onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
