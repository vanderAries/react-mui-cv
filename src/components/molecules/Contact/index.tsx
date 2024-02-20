import { Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import ContactItem from "@components/atoms/ContactItem";

interface ContactProps {
  phone: string;
  email: string;
  linkedin: string;
}

export default function Contact({ phone, email, linkedin }: ContactProps) {
  return (
    <Box
      color="grey.800"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      gap={1}
      width="100%"
      margin={1}
    >
      <ContactItem detail={phone} icon={PhoneIcon} />
      <ContactItem detail={email} icon={EmailIcon} />
      <ContactItem detail={linkedin} icon={LinkedInIcon} />
    </Box>
  );
}
