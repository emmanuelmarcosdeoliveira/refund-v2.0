import accommodationSVG from "../assets/accommodation.svg";
import foodSVG from "../assets/food.svg";
import otherSVG from "../assets/others.svg";
import servicesSVG from "../assets/services.svg";
import transportSVG from "../assets/transport.svg";

export const CATEGORIES = {
  food: { name: "Alimentação", icon: foodSVG },
  others: { name: "Outros", icon: otherSVG },
  service: { name: "Serviços", icon: servicesSVG },
  transport: { name: "Transporte", icon: transportSVG },
  accommodation: { name: "Hospedagem", icon: accommodationSVG },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
