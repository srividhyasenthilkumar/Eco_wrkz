export default function Blogs() {
return (
<section className="max-w-7xl mx-auto px-6 py-16">
<h1 className="text-3xl font-semibold text-green-800">Blogs</h1>
<div className="mt-6 space-y-4">
{[1, 2, 3].map((post) => (
<div
key={post}
className="rounded-xl border p-5 hover:shadow transition"
>
<h2 className="text-xl font-semibold">Blog Post {post}</h2>
<p className="mt-2 text-gray-600">
Insights and updates on sustainability and eco‑friendly practices.
</p>
</div>
))}
</div>
</section>
);
}