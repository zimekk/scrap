import React, { useMemo } from "react";
import { encode } from "@darthmaim/barcode";
import { Barcode } from "@darthmaim/react-barcode";

export default function ProductBarcode({
  barcode,
  className,
}: {
  barcode: string;
  className?: string;
}) {
  const isValid = useMemo(() => {
    try {
      encode(barcode);
    } catch (e) {
      return false;
    }
    return true;
  }, [barcode]);

  return isValid ? (
    <div className={className}>
      <Barcode value={barcode} />
    </div>
  ) : null;
}
