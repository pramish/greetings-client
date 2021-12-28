import { useMemo, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import EditIcon from "@mui/icons-material/EditTwoTone";

import ListFriendsStyle from "../../../../styles/dashboard/friends/ListFriends.module.scss";
import { FriendsType } from "../../../../types";
import { LoadingButton } from "@mui/lab";

const friend = [
  {
    id: "" + Math.random(),
    name: "Pramish Luitel",
    dateOfBirth: "1640679113391",
  },
  {
    id: "" + Math.random(),
    name: "Rohit Gurung",
    dateOfBirth: "1640679113491",
  },
  {
    id: "" + Math.random(),
    name: "Jeshan Shrestha",
    dateOfBirth: "1640649113391",
  },
  {
    id: "" + Math.random(),
    name: "Sharad Ghimire",
    dateOfBirth: "1640679613391",
  },
];

type ListFriendProps = {
  friends: FriendsType[];
};

type FriendToDelete = {
  id: string;
  name: string;
};

export const ListFriend = ({ friends }: ListFriendProps) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [isDeleteFriendProgress, setIsDeleteFriendProgress] =
    useState<boolean>(false);

  const [friendToDelete, setFriendToDelete] = useState<FriendToDelete>({
    id: "",
    name: "",
  });

  const handleOpenDialogClick = (id: string, name: string) => {
    setFriendToDelete({ id, name });
    setIsDeleteDialogOpen(!isDeleteDialogOpen);
  };
  const handleCloseDialogClick = () => {
    setIsDeleteDialogOpen(!isDeleteDialogOpen);
  };

  return (
    <>
      <p>My friends</p>
      <div className={ListFriendsStyle.friendsContainer}>
        {friend.map((eachFriend) => (
          <Paper
            key={eachFriend.id}
            elevation={12}
            className={ListFriendsStyle.friendsDetail}
          >
            <p>
              <strong>Name: </strong> {eachFriend.name}
            </p>
            <p>
              <strong>Date of birth: </strong>
              {new Date(+eachFriend.dateOfBirth).toLocaleString("en-GB", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className={ListFriendsStyle.iconsContainer}>
              <EditIcon color="action" cursor="pointer" />
              <DeleteIcon
                color="warning"
                cursor="pointer"
                onClick={() =>
                  handleOpenDialogClick(eachFriend.id, eachFriend.name)
                }
              />
            </div>
          </Paper>
        ))}
        <Dialog
          open={isDeleteDialogOpen}
          onClose={setIsDeleteDialogOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Delete {friendToDelete.name} as your friend?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {`If you delete ${friendToDelete.name} then you won't be able to send
              the automated birthday messages.`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="info" onClick={handleCloseDialogClick}>
              Cancel
            </Button>
            <LoadingButton
              loading={isDeleteFriendProgress}
              color="error"
              onClick={handleCloseDialogClick}
              autoFocus
            >
              Delete
            </LoadingButton>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
