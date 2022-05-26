export type ComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  markComplete(): void;
  siteKey: string;
  isLoading?: boolean;
  isSubmitting?: boolean;
  onBlur?(
    event: React.FocusEvent<HTMLInputElement>
  ): void;
};

export type ChallengeProps = React.FC<ComponentProps> & {
  startButtonProps: {
    logo: string;
    bgcolor: string;
  };
  helpContentProps: {
    componentName: string;
    componentVersion: string;
    helpMessage: string;
  };
};
