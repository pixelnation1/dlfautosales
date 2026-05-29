export type Vehicle = {
  id: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  mileage: number;
  price: number;
  paymentEstimate: number;
  image: string;
  featured?: boolean;
};

export const featuredVehicles: Vehicle[] = [
  {
    id: "1",
    year: 2019,
    make: "Toyota",
    model: "Camry",
    trim: "SE",
    mileage: 62400,
    price: 18995,
    paymentEstimate: 289,
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    featured: true,
  },
  {
    id: "2",
    year: 2020,
    make: "Ford",
    model: "F-150",
    trim: "XLT",
    mileage: 45800,
    price: 32495,
    paymentEstimate: 489,
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228d1a2d?w=800&q=80",
    featured: true,
  },
  {
    id: "3",
    year: 2018,
    make: "Honda",
    model: "CR-V",
    trim: "EX",
    mileage: 71200,
    price: 19995,
    paymentEstimate: 305,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    featured: true,
  },
  {
    id: "4",
    year: 2021,
    make: "Chevrolet",
    model: "Equinox",
    trim: "LT",
    mileage: 38900,
    price: 22995,
    paymentEstimate: 349,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    featured: true,
  },
  {
    id: "5",
    year: 2017,
    make: "Nissan",
    model: "Altima",
    trim: "SV",
    mileage: 84500,
    price: 14995,
    paymentEstimate: 229,
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    featured: true,
  },
  {
    id: "6",
    year: 2022,
    make: "Hyundai",
    model: "Tucson",
    trim: "SEL",
    mileage: 22100,
    price: 26995,
    paymentEstimate: 409,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    featured: true,
  },
];

export function getVehicleName(vehicle: Vehicle): string {
  return `${vehicle.year} ${vehicle.make} ${vehicle.model}${
    vehicle.trim ? ` ${vehicle.trim}` : ""
  }`;
}

export const allVehicles = featuredVehicles;

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
