/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubmissionsCreateFormInputValues = {
    video?: string;
    text?: string;
    github?: string;
};
export declare type SubmissionsCreateFormValidationValues = {
    video?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    github?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubmissionsCreateFormOverridesProps = {
    SubmissionsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    video?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    github?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubmissionsCreateFormProps = React.PropsWithChildren<{
    overrides?: SubmissionsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SubmissionsCreateFormInputValues) => SubmissionsCreateFormInputValues;
    onSuccess?: (fields: SubmissionsCreateFormInputValues) => void;
    onError?: (fields: SubmissionsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubmissionsCreateFormInputValues) => SubmissionsCreateFormInputValues;
    onValidate?: SubmissionsCreateFormValidationValues;
} & React.CSSProperties>;
export default function SubmissionsCreateForm(props: SubmissionsCreateFormProps): React.ReactElement;
