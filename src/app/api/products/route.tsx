import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
  } catch (error) {
    return new NextResponse("Failed to get products", { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
  } catch (error) {
    return new NextResponse("Failed to post products", { status: 500 });
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
  } catch (error) {
    return new NextResponse("Failed to update products", { status: 500 });
  }
};
