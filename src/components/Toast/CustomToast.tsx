import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Avatar, Button, Stack, Typography } from "@mui/material";

const CustomToast = ({ content, appearance, type }: any) => {
  React.useEffect(() => {
    if (appearance === "success") {
      toast.info(
        <Stack width={"100%"}>
          <Stack
            direction={"row"}
            // alignItems={"center"}
            justifyContent={"flex-start"}
            gap={4}
          >
            <Avatar sx={{ width: 50, height: 50 }} />
            <Stack>
              <Typography fontWeight={500} color={"black"}>
                Bonnie Green
              </Typography>
              <Typography>{content}</Typography>
              <Button
                sx={{
                  border: "1px solid black",
                  backgroundColor: "yellow",
                  width: "35%",
                  fontSize: "12px",
                  textTransform: "none",
                  borderRadius: "50px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Button Text
              </Button>
            </Stack>
          </Stack>
        </Stack>,
        { autoClose: false }
      );
    } else if (appearance === "error") {
      toast.info(
        <>
          <span>{content}</span>
        </>,
        { autoClose: false }
      );
    }
  }, [content, appearance]);

  return null;
};

export default CustomToast;
