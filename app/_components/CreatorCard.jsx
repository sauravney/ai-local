import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CreatorCard = ({ image, name, email }) => {
  return (
    <Card className="p-6 shadow-lg flex flex-col items-center text-center bg-white rounded-xl">
      {/* Profile Image */}
      <Image
        src={image} // Change this to your actual image path
        alt="Creator of AI Course Generator"
        width={120}
        height={120}
        className="rounded-full border-4 border-gray-300 shadow-md"
      />
      <CardHeader>
        <CardTitle>
          <h2 className="text-lg font-semibold">{name}</h2>
        </CardTitle>
        <CardDescription>{email}</CardDescription>
      </CardHeader>

      {/* Text Content */}
      <CardContent className="mt-4">
        <p className="text-gray-600">Building AI-powered learning solutions.</p>
      </CardContent>
    </Card>
  );
};

export default CreatorCard;
