/**
 * AArch64 General-Purpose Register File (GPRs).
 *
 * Hardware intent:
 * - Holds X0...X30 only. XZR/SP (encoded as reg=31) is not stored/accessed here.
 * - Provides two combinational read ports (readA/readB).
 * - Provides one sequential write port that commits on the "clock edge" once per cycle.
 */

export type RegIndex = number; // 0...30
export type Word = bigint;

// Read-port request (combinational)
export interface RFReadReq
{
    idx: RegIndex;                      // Source register index (0..30)
}

// Write-port request (sequential)
export interface RFWriteReq
{
    WrEn: boolean;                      // Write enable
    idx: RegIndex;                      // Destination register index (0..30)
    data: Word;                         // Data to write
}

// Zero-extend a 32-bit value to 64 bits for write-back
export const ZERO_EXT_32 = (x: Word) => (x & 0xFFFF_FFFFn);

// Register File
export class RegisterFile
{

}