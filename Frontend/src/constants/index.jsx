import { BotMessageSquare } from "lucide-react";
import { Fingerprint  } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { Cloud } from "lucide-react";
import { PlugZap } from "lucide-react";
import { Eye } from "lucide-react";


export const navItems = [
  {/*}
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
   */}
];

export const features = [
  {
    icon: <Fingerprint />, 
    text: "Drag-and-Drop Interface",
    description:
      "Uploading and organizing content has never been easier. With a user-friendly drag-and-drop interface, you can quickly add and arrange your product images & videos. No technical expertise required.",
  },
  {
    icon: <BotMessageSquare />,
    text: "Smart Content Extraction",
    description:
      "Effortlessly extract key product details such as descriptions, prices, and features from captions, hashtags, and other metadata. So you don’t have to manually sift through posts for hours.",
  },
  {
    icon: <ImageIcon />, 
    text: "Image & Video Enhancer",
    description:
      "Automatically adjust the resolution, brightness, contrast, and other elements of your images and videos to meet quality standards. Your media comes out polished and ready to make a great impression on potential customers.",
  },
  
  {
    icon: <Cloud /> , // Use appropriate icon for Multi-Platform Support
    text: "Multi-Platform Support",
    description:
      "Whether it is social media, cloud storage, or local files, our platform supports seamless uploads from all sources.",
  },
  
  {
    icon: <PlugZap /> , // Use appropriate icon for Instant Listings
    text: "Instant Listings",
    description:
      "Generate ready-to-upload product listings in just a few clicks. Our platform automatically formats everything into a listing that is compatible with popular e-commerce sites like Amazon, saving you valuable time.",
  },
 
  {
    icon: <Eye /> , // Use appropriate icon for Live Preview
    text: "Live Previews",
    description:
      "Get a real-time look at how your listings and media will appear before finalizing them. With live previews, you can make immediate adjustments before hitting publish.",
  },
  
];



