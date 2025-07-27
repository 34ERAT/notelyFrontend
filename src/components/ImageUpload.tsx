import { Stack } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import { useState } from "react";
import { useProfileStore } from "../store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ActionButton from "./ActionButton";
type Props = {
  onChange: (image: string) => void;
};
function ImageUpload({ onChange }: Props) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { profile, setProfile } = useProfileStore();
  const [avatar, setAvatar] = useState<FormData | undefined>();
  const { mutate, isPending } = useMutation({
    mutationKey: ["uploadAvater"],
    mutationFn: async (avater: FormData) => {
      const { data } = await axiosInstance.post<{ url: string }>(
        "/images/avatar",
        avater,
      );
      return data;
    },
    onSuccess({ url }) {
      setIsSuccess(true);
      setProfile({ ...profile, avatar: url });
      setTimeout(() => setIsSuccess(false), 3000);
    },
  });
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <input
        type="file"
        onChange={(e) => {
          const image = e.target.files?.[0];
          if (!image) return;
          const formData = new FormData();
          formData.append("avatar", image);
          setAvatar(formData);
          onChange(URL.createObjectURL(image));
        }}
        accept="image/"
      />
      <ActionButton
        isloading={isPending}
        isSuccess={isSuccess}
        size="small"
        successIcon={<CheckCircleIcon />}
        icon={<SaveIcon />}
        onClick={() => {
          if (!avatar) return;
          mutate(avatar);
        }}
        disabled={!avatar}
      />
    </Stack>
  );
}

export default ImageUpload;
