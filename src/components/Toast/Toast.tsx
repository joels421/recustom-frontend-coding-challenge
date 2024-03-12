// components/Toast.js

import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import { TiTick } from "react-icons/ti";
import { CiBellOn } from "react-icons/ci";

const Toast = ({ content, appearance, type }: any) => {
  useEffect(() => {
    if (type === "one") {
      toast.success(
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={2}
          data-testid="example-component"
        >
          <TiTick
            style={{
              padding: 4,
              backgroundColor: "rgb(212,242,236)",
              borderRadius: "5px",
            }}
          />
          <span>{content}</span>
        </Stack>,
        { autoClose: false, type: "success" }
      );
    } else if (type === "two") {
      toast.success(
        <Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <TiTick
              style={{
                backgroundColor: "rgb(77, 169, 131)",
                color: "white",
                padding: "5px",
                borderRadius: "50%",
              }}
            />
            <Typography sx={{ fontWeight: "bold" }}>Success</Typography>
          </Stack>
          <span>{content}</span>

          <Button
            sx={{
              width: "18%",
              textTransform: "none",
              backgroundColor: "rgb(77, 169, 131)",
              color: "white",
              fontSize: "12px",
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "rgb(50, 130, 100)",
              },
            }}
          >
            Take Action
          </Button>
        </Stack>,
        { autoClose: false }
      );
    } else if (type === "three") {
      toast.error(
        <Stack alignItems={"center"} direction={"row"} gap={4}>
          <CiBellOn
            style={{
              fontSize: "18px",
              backgroundColor: "rgb(251, 225, 225)",
              padding: 5,
              borderRadius: "5px",
            }}
          />
          <span>{content}</span>
        </Stack>,
        { autoClose: false }
      );
    } else if (type === "four") {
      toast.error(
        <Stack>
          <Stack direction={"row"} gap={2}>
            <Typography
              sx={{
                backgroundColor: "rgb(237,110,105)",
                padding: "1px 10px",
                color: "white",
                borderRadius: "50%",
              }}
            >
              !
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>Attention</Typography>
          </Stack>
          <span>{content}</span>
          <Button
            sx={{
              width: "18%",
              textTransform: "none",
              backgroundColor: "rgb(237,110,105)",
              color: "white",
              fontSize: "12px",
              borderRadius: "50px",
              border: "1px solid  black",
              paddingTop: "5px",
              "&:hover": {
                backgroundColor: "rgb(237,110,105)",
              },
            }}
          >
            Take Action
          </Button>
        </Stack>,
        { autoClose: false }
      );
    }
  }, [content, appearance, type]);

  return null;
};

export default Toast;
