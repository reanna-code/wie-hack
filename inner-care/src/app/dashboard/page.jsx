import { Box, Typography } from "@mui/material";
import InnerCareCalendar from "@/components/InnerCareCalendar";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  return (
    <Box>
        <Navbar/>
      <InnerCareCalendar/>
    </Box>
  );
}