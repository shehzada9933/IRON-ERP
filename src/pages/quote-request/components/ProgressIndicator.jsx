import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps, steps, onStepClick }) => {
    const getStepStatus = (stepIndex) => {
        if (stepIndex < currentStep) return 'completed';
        if (stepIndex === currentStep) return 'current';
        return 'upcoming';
    };

    return (
        <div className="w-full mb-8">
            <div className="flex items-center justify-between relative">
                {/* Progress Line */}
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-border z-0">
                    <div
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
                    />
                </div>

                {/* Step Indicators */}
                {steps.map((step, index) => {
                    const status = getStepStatus(index);
                    const isClickable = index < currentStep;

                    return (
                        <div key={step.id} className="flex flex-col items-center relative z-10">
                            <button
                                onClick={() => isClickable && onStepClick(index)}
                                disabled={!isClickable}
                                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${status === 'completed'
                                        ? 'bg-primary border-primary text-white hover:bg-primary/90'
                                        : status === 'current' ? 'bg-white border-primary text-primary shadow-lg' : 'bg-white border-border text-muted-foreground'
                                    } ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                                {status === 'completed' ? (
                                    <Icon name="Check" size={20} strokeWidth={2.5} />
                                ) : (
                                    <Icon name={step.icon} size={20} strokeWidth={2} />
                                )}
                            </button>

                            <div className="mt-3 text-center">
                                <div className={`text-sm font-medium ${status === 'current' ? 'text-primary' :
                                        status === 'completed' ? 'text-foreground' : 'text-muted-foreground'
                                    }`}>
                                    {step.title}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1 max-w-24">
                                    {step.subtitle}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Progress Bar */}
            <div className="lg:hidden mt-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>Step {currentStep + 1} of {totalSteps}</span>
                    <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                    <div
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgressIndicator;