"use client"
import classNames from "classnames";
import { useFeatureStore } from "./store";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
  id: string;
};

type CardProps = {
    id: string;
  };

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={classNames(
        "absolute inset-0 bg-gradient-to-br w-full h-full rounded-2xl transition-opacity duration-300",
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const Todo = ({id}: CardProps) =>{
    return(
        <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
            <span />
        </FeatureCard>
    )
}

export const Colors = ({id}: CardProps) =>{
    return(
        <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
            <span />
        </FeatureCard>
    )
}

export const Availability = ({id}: CardProps) =>{
    return(
        <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
            <span />
        </FeatureCard>
    )
}

export const Music = ({id}: CardProps) =>{
    return(
        <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
            <span />
        </FeatureCard>
    )
}

export const SchedudlingLinks = ({id}: CardProps) =>{
    return(
        <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
            <span />
        </FeatureCard>
    )
}

export const Team = ({id}: CardProps) =>{
    return(
        <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#ffade1]">
            <span />
        </FeatureCard>
    )
}