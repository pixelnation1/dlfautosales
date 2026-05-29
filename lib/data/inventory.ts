export type Vehicle = {
  id: string;
  slug: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  price: number;
  mileage: number;
  paymentEstimate: number;
  exteriorColor: string;
  interiorColor: string;
  transmission: string;
  drivetrain: string;
  fuelType: string;
  vin: string;
  stockNumber: string;
  bodyStyle: string;
  imageUrls: string[];
  features: string[];
  description: string;
  featured?: boolean;
};

export const allVehicles: Vehicle[] = [
  {
    id: "1",
    slug: "2019-toyota-camry-se",
    year: 2019,
    make: "Toyota",
    model: "Camry",
    trim: "SE",
    mileage: 62400,
    price: 18995,
    paymentEstimate: 289,
    exteriorColor: "Super White",
    interiorColor: "Black Fabric",
    transmission: "8-Speed Automatic",
    drivetrain: "FWD",
    fuelType: "Gasoline",
    vin: "4T1B11HK5KU123456",
    stockNumber: "DLF-1901",
    bodyStyle: "Sedan",
    imageUrls: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
    ],
    features: [
      "Backup Camera",
      "Bluetooth",
      "Apple CarPlay",
      "Lane Departure Warning",
      "Adaptive Cruise Control",
      "Keyless Entry",
      "Alloy Wheels",
    ],
    description:
      "This 2019 Toyota Camry SE delivers the reliability Emporia drivers expect with sporty styling and excellent fuel economy. A well-maintained sedan with a clean history, smooth highway manners, and modern safety tech — ideal for commuters and families alike.",
    featured: true,
  },
  {
    id: "2",
    slug: "2020-ford-f-150-xlt",
    year: 2020,
    make: "Ford",
    model: "F-150",
    trim: "XLT",
    mileage: 45800,
    price: 32495,
    paymentEstimate: 489,
    exteriorColor: "Oxford White",
    interiorColor: "Medium Earth Gray",
    transmission: "10-Speed Automatic",
    drivetrain: "4WD",
    fuelType: "Gasoline",
    vin: "1FTEW1E50LFA12345",
    stockNumber: "DLF-2002",
    bodyStyle: "Truck",
    imageUrls: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228d1a2d?w=1200&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80",
      "https://images.unsplash.com/photo-1559416523-140ddc327aeb?w=1200&q=80",
    ],
    features: [
      "4WD",
      "Towing Package",
      "Backup Camera",
      "Bluetooth",
      "SYNC 3 Infotainment",
      "Bed Liner",
      "Running Boards",
      "Power Driver Seat",
    ],
    description:
      "Built for work and weekend adventures, this 2020 Ford F-150 XLT combines proven capability with everyday comfort. Low miles for the year, 4WD confidence for Kansas weather, and plenty of cab space — a top pick for trades, farms, and family haulers in Emporia.",
    featured: true,
  },
  {
    id: "3",
    slug: "2018-honda-cr-v-ex",
    year: 2018,
    make: "Honda",
    model: "CR-V",
    trim: "EX",
    mileage: 71200,
    price: 19995,
    paymentEstimate: 305,
    exteriorColor: "Modern Steel Metallic",
    interiorColor: "Black Cloth",
    transmission: "CVT Automatic",
    drivetrain: "AWD",
    fuelType: "Gasoline",
    vin: "2HKRW2H50JH123456",
    stockNumber: "DLF-1803",
    bodyStyle: "SUV",
    imageUrls: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
      "https://images.unsplash.com/photo-1519641472744-92f5270a0b0b?w=1200&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=80",
    ],
    features: [
      "AWD",
      "Sunroof",
      "Honda Sensing Safety Suite",
      "Backup Camera",
      "Bluetooth",
      "Dual-Zone Climate",
      "Roof Rails",
    ],
    description:
      "The 2018 Honda CR-V EX is one of the most trusted compact SUVs on the road — spacious, efficient, and equipped with Honda Sensing driver aids. AWD traction for all seasons and a versatile cargo area make it a smart choice for Emporia families.",
    featured: true,
  },
  {
    id: "4",
    slug: "2021-chevrolet-equinox-lt",
    year: 2021,
    make: "Chevrolet",
    model: "Equinox",
    trim: "LT",
    mileage: 38900,
    price: 22995,
    paymentEstimate: 349,
    exteriorColor: "Mosaic Black Metallic",
    interiorColor: "Jet Black Premium Cloth",
    transmission: "6-Speed Automatic",
    drivetrain: "FWD",
    fuelType: "Gasoline",
    vin: "3GNAXKEV6MS123456",
    stockNumber: "DLF-2104",
    bodyStyle: "SUV",
    imageUrls: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
    ],
    features: [
      "Chevy Infotainment 3",
      "Apple CarPlay / Android Auto",
      "Backup Camera",
      "Remote Start",
      "Bluetooth",
      "Alloy Wheels",
      "Rear Park Assist",
    ],
    description:
      "Low-mileage 2021 Chevrolet Equinox LT with modern connectivity and a comfortable ride. Great visibility, easy parking, and efficient performance — perfect for daily driving around Emporia and road trips across the Flint Hills.",
    featured: true,
  },
  {
    id: "5",
    slug: "2017-nissan-altima-sv",
    year: 2017,
    make: "Nissan",
    model: "Altima",
    trim: "SV",
    mileage: 84500,
    price: 14995,
    paymentEstimate: 229,
    exteriorColor: "Gun Metallic",
    interiorColor: "Charcoal Cloth",
    transmission: "CVT Automatic",
    drivetrain: "FWD",
    fuelType: "Gasoline",
    vin: "1N4AL3AP8HC123456",
    stockNumber: "DLF-1705",
    bodyStyle: "Sedan",
    imageUrls: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
      "https://images.unsplash.com/photo-148529157115f-772de3d1960c?w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80",
    ],
    features: [
      "Backup Camera",
      "Bluetooth",
      "Push Button Start",
      "Remote Start",
      "Power Driver Seat",
      "Alloy Wheels",
      "Cruise Control",
    ],
    description:
      "Affordable and dependable, this 2017 Nissan Altima SV is a strong value for budget-conscious buyers. Smooth ride, roomy interior, and great fuel economy — an excellent entry point into quality used cars in Emporia KS.",
    featured: true,
  },
  {
    id: "6",
    slug: "2022-hyundai-tucson-sel",
    year: 2022,
    make: "Hyundai",
    model: "Tucson",
    trim: "SEL",
    mileage: 22100,
    price: 26995,
    paymentEstimate: 409,
    exteriorColor: "Shimmer Silver",
    interiorColor: "Black Cloth",
    transmission: "8-Speed Automatic",
    drivetrain: "AWD",
    fuelType: "Gasoline",
    vin: "KM8J2CA14NU123456",
    stockNumber: "DLF-2206",
    bodyStyle: "SUV",
    imageUrls: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
      "https://images.unsplash.com/photo-1511404643098-ffe9e2f1a0a0?w=1200&q=80",
    ],
    features: [
      "AWD",
      "Hyundai SmartSense",
      "Wireless Apple CarPlay",
      "Heated Front Seats",
      "Power Liftgate",
      "Blind Spot Monitor",
      "LED Headlights",
    ],
    description:
      "Nearly new with low miles, this 2022 Hyundai Tucson SEL packs modern tech and AWD confidence into a sharp compact SUV. Warranty-friendly, feature-rich, and ready for Emporia winters — one of the freshest vehicles on our lot.",
    featured: true,
  },
];

export const featuredVehicles = allVehicles;

export function getVehicleName(vehicle: Vehicle): string {
  return `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}`;
}

export function getVehiclePrimaryImage(vehicle: Vehicle): string {
  return vehicle.imageUrls[0];
}

export function getVehicleUrl(vehicle: Vehicle): string {
  return `/inventory/${vehicle.slug}`;
}

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return allVehicles.find((v) => v.slug === slug);
}

export function getSimilarVehicles(vehicle: Vehicle, limit = 3): Vehicle[] {
  const sameBody = allVehicles.filter(
    (v) => v.id !== vehicle.id && v.bodyStyle === vehicle.bodyStyle
  );
  const others = allVehicles.filter(
    (v) => v.id !== vehicle.id && v.bodyStyle !== vehicle.bodyStyle
  );
  return [...sameBody, ...others].slice(0, limit);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatMileage(miles: number): string {
  return new Intl.NumberFormat("en-US").format(miles) + " mi";
}
